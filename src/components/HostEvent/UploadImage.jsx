import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

class UploadImage extends PureComponent {
	state = {

		src: null,
		cropDone: false,
		name: null,
		crop: {
			unit: '%',
			width: 30,
			aspect: 1 / 1,
		},
	};

	onSelectFile = e => {
		if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				this.setState({ src: reader.result, cropDone: false });
			}
			);
			reader.readAsDataURL(e.target.files[0]);
			// this.props.onImageUpload(e.target.files[0]);
			console.log(e.target.files[0]);
			this.setState({ name: e.target.files[0].name });
		}

	};

	onImageLoaded = image => {
		this.imageRef = image;
	};

	onCropComplete = crop => {
		this.makeClientCrop(crop);
	};

	onCropChange = (crop, percentCrop) => {
		this.setState({ crop });
	};

	async makeClientCrop(crop) {
		if (this.imageRef && crop.width && crop.height) {
			const croppedImageUrl = await this.getCroppedImg(
				this.imageRef,
				crop,
				this.state.name
			);
			this.setState({ croppedImageUrl });
			this.props.onImageCropped(croppedImageUrl);
			// console.log(croppedImageUrl);
			// const objectUrl = URL.createObjectURL(file);
			// console.log(objectUrl);
		}
	}

	getCroppedImg(image, crop, fileName) {
		const canvas = document.createElement('canvas');
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		canvas.width = crop.width;
		canvas.height = crop.height;
		const ctx = canvas.getContext('2d');

		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			crop.width,
			crop.height
		);

		return new Promise((resolve, reject) => {
			canvas.toBlob(blob => {
				if (!blob) {
					console.error('Canvas is empty');
					return;
				}
				var file = new File([blob], this.state.name, { type: "image/jpeg" });
				// console.log(file);
				this.props.onImageUpload(file);

				blob.name = fileName;
				window.URL.revokeObjectURL(this.fileUrl);
				this.fileUrl = window.URL.createObjectURL(blob);
				resolve(this.fileUrl);
			}, 'image/jpeg');
		});
	}

	onConfirmCrop = e => {
		e.preventDefault();
		this.setState(prevState => {
			return { ...prevState, cropDone: true };
		})
	}

	render() {
		const { crop, croppedImageUrl, src, cropDone } = this.state;

		return (
			<div className={`imageUpload ${src && !cropDone ? 'doCrop' : ''}`}>
				<div className="event_pictures_header">
					<span>Pictures</span>
					<span id="event_pictures_header_right">Minimum 1 Required</span>
				</div>
				{!src && (
					<div className="squareInfo"> Ideal aspect ratio - 1:1</div>
				)}

				{src && !cropDone && (
					<div className="doCropArea">
						<ReactCrop
							src={src}
							crop={crop}
							ruleOfThirds
							onImageLoaded={this.onImageLoaded}
							onComplete={this.onCropComplete}
							onChange={this.onCropChange}
						/>
					</div>
				)}
				{cropDone && croppedImageUrl && (
					<div className="picturebox_container">
						<div className="picturebox_container_picture_box">
							<img alt="Crop" className="picture" src={croppedImageUrl} />
						</div>
					</div>
				)}

				<div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>

					{src && !cropDone &&
						< button type="button" onClick={this.onConfirmCrop}>Confirm</button>
					}

					<label for="image" className="image">Choose File</label>
					<input type="file" id="image" accept="image/*"
						onChange={this.onSelectFile}
						onClick={(event) => {
							event.target.value = null
						}}
					/>
				</div>
			</div >
		);
	}
}

// ReactDOM.render(<App />, document.getElementById('root'));
export default UploadImage;
