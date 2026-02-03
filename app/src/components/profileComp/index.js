import { Content } from "next/font/google"

export default function profileComp({profileType}) {

     return (

        <div style={{

            
            height: 500,
            width: 500, 
            backgroundColor: "#808080",
            margin: 40,
            paddingTop: 20
    



        }}>

            <div style={{

                width: 300,
                height: 200,
                marginLeft: 60,
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: "#89CFF0",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                


            }}>



            </div>

            <button style={{

                width: 200,
                height: 70,
                backgroundColor: "#90EE90",
                display: "flex",
                marginLeft: 60,
                borderRadius: 10,
                color: "#000000",
                fontSize: 20,
                fontWeight: "bold",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                

            }}>

                <div style={{

                color: "#000000",
                fontSize: 20,
                fontWeight: "bold",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: 25
                }}>DM</div>

            


            </button>

            <div style={{
                   marginLeft: 60,
                   marginTop: 20,
                   color: "#000000",
                   fontSize: 20,
                   fontWeight: "bold"


            }}>
                @username

            </div>
 
            <div style={{

                   marginLeft: 60,
                   marginTop: 20,
                   color: "#000000",
                   fontSize: 20,
                   fontStyle: "italic",
                   fontWeight: "bold"




            }}>



            bio..................
            </div>






        </div>
     )





}