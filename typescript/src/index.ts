// import foo, { version } from "./foo.ts"
//
// export default function () {
// 	console.log( foo, version )
// }
import answer from "the-answer"
import "./index.css"
import src from  "./img.jpg"




export default function ()
{
	import("./foo").then( ( { default: foo, version } ) => console.log( foo, version, answer, src ) )
}

