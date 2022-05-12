/* eslint no-eval: 0*/
import React, {useState} from "react"
import words from 'lodash.words'
import Result from "./components/Result"
import MathOperations from "./components/MathOperations"
import Functions from "./components/Functions"
import "./App.css"
import Numbers from "./components/Numbers"

// Función Flecha o Arrow Function
const App = () => {

	// Array Destructuring
	// 1era posición: valor (que inicialmente es el valor por defecto)
	// 2nda posición: función que me permite modificar el valor por defecto
	// [xxxx], [setxxxx]
	const [stack, setStack] = useState("")

	const items = words(stack, /[^-^+^*^/]+/g)

	// Lo que ejecuta la función
	// console.log("Renderización de App", items)

	const value = items.length > 0 ? items[items.length-1] : "0"

	return (
		<main className="react-calculator">
			<Result value={value}></Result>
			<Numbers
				onClickNumber={number => setStack(`${stack}${number}`)}>
			</Numbers>
			<Functions
				onContentClear={() => {
					setStack("")
				}}
				onDelete={() => {
					if (stack.length > 0){
						const newStack = stack.substring(0,stack.length -1)
						setStack(newStack)
					}
				}}>
			</Functions>
			<MathOperations
				onClickOperation={operation => setStack(`${stack}${operation}`)}
				onClickEqual={equal => setStack(eval(stack).toString())}>
			</MathOperations>
		</main>
	)
}

export default App

