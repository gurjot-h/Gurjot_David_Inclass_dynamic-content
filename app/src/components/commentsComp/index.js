import { Rowdies } from "next/font/google";

export default function CommentComponent(commentType){
return (

<div style={{textAlign: left, background: "grey", wifth: "30%" }}>
    <p>@username</p>
    <div
    style={{
        display:"flex",
        flexDirection: "column",
        alignItems: "flex-end",

    }}>
<p style={{wifth: "100%"}}>comment 1 lorem ipsum hfshfskej kaslkads afdsf..........</p>
<p>dd/mm/yyyy - 00:00:00</p>

<button type = "button"
style = {{
    backgroundColor: "green",
    width: "30%",
    height: "20px",
    margin: "10px",
}}
>reply</button>

    </div>

</div>

     )
}
