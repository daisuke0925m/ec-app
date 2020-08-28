import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    "button": {
        backgroundColor: "#4dd0e1"
    }
})

const PrimaryButton = (props) => {
    const classes = useStyles();

    return (
        <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
            {props.label}
        </Button>
    )
}

export default PrimaryButton