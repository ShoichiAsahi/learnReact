import React from 'react';

const Card = ({id, name, email}) => {
	return (
		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>  {/*className come from tachyons*/}
			<img alt='robots' src={`https://robohash.org/${id}?100*100`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card; // defalt means this component return single object. 