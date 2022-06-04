import React from 'react';
import { Card, CardHeader, CardContent, Typography , Divider} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

import useStyles from './styles';

const Details = ({ title }) => {
	const classes = useStyles();
	const { total, chartData } = useTransactions(title);

	return (
		<Card className={title === 'Income' ? classes.income : classes.expense}>
			<CardHeader title={title} className={title === 'Income' ? classes.incometit : classes.expensetit}/>
			<Divider className={classes.divider} />
			<CardContent>
				<Typography variant="h5" className={title === 'Income' ? classes.incomecard : classes.expensecard} >${total}</Typography>
				<Doughnut data={chartData} />
			</CardContent>
		</Card>
	);
};

export default Details;
