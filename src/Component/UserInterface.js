import React from "react";
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import {makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    subdiv:{
         padding:20,
         width:700,
         marginTop:20,
         background:'#dff9fb'
    }

}));

const handleCategoryChange=async(event)=>{
    <div>
        Hello
    </div>
}
const handleClick=async()=>{

}
export default function UserInterface(props)
{
const classes = useStyles();

    return (<div className={classes.root}>
       <div className={classes.subdiv}>
       <Grid container spacing={1}>
   <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{ fontSize:22,fontWeight:700,letterSpacing:2,padding:20 }}>
      User Interface
    </div>
   </Grid>
   <div > 
   <ArrowBackIcon label="Add Question">Back</ArrowBackIcon>
       Add Question
   </div>
   <Grid item xs={12}>
     <TextField label="Question Title" variant="outlined" fullWidth/>
     </Grid>

     <Grid item xs={12}>
     <FormControl variant="outlined" fullWidth className={classes.formControl}>
                           <InputLabel id="demo-simple-select-outlined-subcategory">Answer Type</InputLabel>
                           <Select
                        
                               //value={age}
                               onChange={(event)=>handleCategoryChange(event)}
                               label="Answer Type">
                                <option>None</option>
                                <option>Text</option>
                                <option>Number</option>
                                <option>Select</option>
                                <option>TextArea</option>
                                <option>Radio</option>
                                <option>Checkbox</option>
                                <option>Slider</option>
                           </Select>
                       </FormControl>
     </Grid>

     <Grid item xs={12} sm={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                        <Button onClick={()=>handleClick()} fullWidth variant="contained" color="primary" >Submit</Button>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Button fullWidth variant="contained" color="secondary">Reset</Button>
                    </Grid>

                </Grid>    


           
      </div>   
        
    </div>)
}