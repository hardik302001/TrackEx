import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    income: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    },
    expense: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
    },
    incomecard:{
        color: '#66B032',
        fontSize: 'large', 
    },
    expensecard:{
        color: '#FF7F50',
        fontSize: 'large', 
    },
    incometit:{
        color: '#089010',
        fontWeight : 'bold',
        fontSize: 'xx-large', 
    },
    expensetit:{
        color: '#FF0000	',
        fontWeight : 'bold',
        fontSize: 'xx-large', 
    }
}))