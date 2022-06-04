import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
	return (
		<div style={{ textAlign: 'center', padding: '0 10%' , color : "blue"}}>
			<h4 style={{ fontStyle: 'italic' , color : "#8601AF"}}>
				Try saying: 
			</h4>
			
			Add {isIncome ? 'Income ' : 'Expense '}
			for {isIncome ? '$100 ' : '$50 '}
			in Category {isIncome ? 'Business ' : 'House '}
			for {isIncome ? 'Monday ' : 'Monday '}
		</div>
	);
};

export default InfoCard;
