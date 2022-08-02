
import axios, { Axios, AxiosError } from 'axios';
import React, {createElement as e, useEffect, useState} from 'react';
import {Product} from '../components/Product';
// import {products} from './data/products';
import { IProduct } from '../models';



export function useProducts() {
	// Состояние приложения
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	// Асинхронный запрос на сервер с обработкой ошибок
	async function fetchProducts() {

		try {
			setError('')
			setLoading(true)
			const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
			setProducts(response.data)
			setLoading(false)
		} catch (e: unknown) {
			const error = e as AxiosError
			setLoading(false)
			setError(error.message)
		}


	}

	// Хуки
	useEffect(() => {
		fetchProducts()
	}, [])

	return {products, loading, error}
}