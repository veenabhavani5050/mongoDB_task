// const errorRoute =(req,res)=>{
// return res.status(404).json({
//     response:"Router not found"
// })
// }

// export default errorRoute;

const errorRoute = (req, res) => {
    return res.status(404).json({
      response: "Route not found"
    });
  }
  
  export default errorRoute;
  