import { useState, useRef } from 'react'
import styles from './App.module.css'

const buttonsData = [
	{
		id: '0',
		value: '0',
	},
	{
		id: '1',
		value: '1',
	},
	{
		id: '2',
		value: '2',
	},
	{
		id: '3',
		value: '3',
	},
	{
		id: '4',
		value: '4',
	},
	{
		id: '5',
		value: '5',
	},
	{
		id: '6',
		value: '6',
	},
	{
		id: '7',
		value: '7',
	},
	{
		id: '8',
		value: '8',
	},
	{
		id: '9',
		value: '9',
	},
	{
		id: 'plus',
		value: '+',
	},
	{
		id: 'minus',
		value: '-',
	},
	{
		id: 'result',
		value: '=',
	},
	{
		id: 'clear',
		value: 'C',
	},
]

function App() {
	const [operand1, setOperand1] = useState('')
	const [operand2, setOperand2] = useState('')
	const [operator, setOperator] = useState('')
	const displayRef = useRef()

	const calculation = () => {
		if (operator === '-') {
			return +operand1 - +operand2
		} else {
			return +operand1 + +operand2
		}
	}

	const onButtonClick = (event) => {
		const { target } = event
		const isNumberButton = +target.id || target.id === '0' ? true : false
		displayRef.current.style.color = 'inherit'

		if (isNumberButton && !operator) {
			setOperand1((a) => a + target.innerText)
		} else if (isNumberButton && operand1) {
			setOperand2((b) => b + target.innerText)
		} else if (target.id === 'clear') {
			setOperand1('')
			setOperand2('')
			setOperator('')
		} else if (target.id === 'minus') {
			setOperator('-')
		} else if (target.id === 'plus') {
			setOperator('+')
		} else if (target.id === 'result') {
			displayRef.current.style.color = 'green'
			setOperand1(calculation())
			setOperand2('')
			setOperator('')
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.calculator}>
				<div className={styles['display-block']}>
					<p ref={displayRef}>{operand1 + operator + operand2}</p>
				</div>
				<div className={styles['btn-block']}>
					{buttonsData.map((btn) => {
						return (
							<button
								className={styles.button}
								id={btn.id}
								key={btn.id}
								type="button"
								onClick={onButtonClick}
							>
								{btn.value}
							</button>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default App
