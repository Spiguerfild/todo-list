import axios from 'axios';
import { Task } from '../types';

export const api = axios.create({

  baseURL: 'http://localhost:3000',
  timeout: 3000,

});

export async function getAll() {
  const tasks = await api.get('tasks')
  return tasks.data
}
export async function getById(id: number) {
  const tasks = await api.get(`tasks/${id}`)
  return tasks.data
}
export async function save(task: Task) {
  const response = await api.post(`tasks`, {
    ...task
  })
  return response.data
}
export async function update(task: Task) {
  const response = await api.put(`tasks/${task.id}`, {
    ...task
  })
  return response.data
}
export async function exclude(id: number) {
  const tasks = await api.delete(`tasks/${id}`)
  return tasks.data
}