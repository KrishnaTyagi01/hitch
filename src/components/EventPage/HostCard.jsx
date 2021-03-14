import host from '../../icons/Host.png'

const HostCard = (props)=>{
	return (
		<div className="hostcard">
			<div className="hostcard__wrapper">
				<img src={props.imgsrc} alt="host pic" className="hostcard__pic"/>
				<span className="hostcard__role"><p style={{textAlign:"center"}}>{props.role}</p></span>
				<div className="hostcard__host">
					 <h3 className="hostcard__name">{props.name}</h3>
					<span className="hostcard__category">{props.category}</span>
				</div>
			   
				<p className="hostcard__text">
				Coldplay are a British rock band formed in London in 1996.[1][2] Vocalist, rhythm guitarist and pianist Chris Martin, lead guitarist Jonny Buckland, bassist Guy Berryman, and drummer</p>
			</div>
			
		</div>
	)
}

export default HostCard;