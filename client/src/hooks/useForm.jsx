import { useEffect } from 'react'
import { useForm as useFormReact } from 'react-hook-form'

export const useForm = () => {
	const {
		register,
		handleSubmit,
		formState,
		clearErrors,
		reset,
		setValue,
		control,
		getFieldState,
		getValues,
		resetField,
		setError,
		setFocus,
		trigger,
		unregister,
		watch
	} = useFormReact()

	useEffect(() => {
		if (formState.errors) {
			const clearErrosTimer = setTimeout(() => {
				clearErrors()
			}, 5000)
			return () => clearTimeout(clearErrosTimer)
		}
	}, [formState.errors])

	return {
		register,
		handleSubmit,
		formState,
		reset,
		setValue,
		control,
		getFieldState,
		getValues,
		resetField,
		setError,
		setFocus,
		trigger,
		unregister,
		watch
	}
}
