import React ,{useState}from 'react'

 const Forms = (props) => {


    const[titleItem , setTitleItem] = useState("");
    const[descItem , setDescItem]=useState("");
    const[dateItem , setDateItem]=useState("");

    const submitHandler=(event)=>{
      event.preventDefault();
      const newMovie ={
        title : titleItem,
        desc : descItem,
        date : new Date(dateItem),
        id : Math.random()
      }
      console.log(newMovie)
      props.onAddMovie(newMovie)

      setTitleItem("");
      setDescItem("");
      setDateItem("")
    }
     
    const titleChangeHandler=(event)=>{
        event.preventDefault();
        setTitleItem(event.target.value)
    }
    const descChangeHandler=(event)=>{
        event.preventDefault();
        setDescItem(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        event.preventDefault();
        setDateItem(event.target.value)
    }


  return (
    <form onSubmit={submitHandler}>
  <div class="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" value={titleItem} onChange={titleChangeHandler} placeholder="Enter Title"/>
  </div>
  <div class="form-group">
    <label htmlFor="desc">Description</label>
    <textarea type="textarea" rows="4" className="form-control" id="desc" value={descItem} onChange={descChangeHandler} placeholder="Enter Description" ></textarea>
  </div>
 
  <div class="form-group">
    <label htmlFor="date">Release Date</label>
    <input type="date" className="form-control" value={dateItem} onChange={dateChangeHandler} id="date" placeholder="Enter Release Date"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  )
}

export default Forms
