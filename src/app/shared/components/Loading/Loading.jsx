import React from "react";
import './Loading.css'


function Loading(){
    return(
<div class="d-flex justify-content-center loading">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
    )
}

export default Loading