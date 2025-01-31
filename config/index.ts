import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'ผู้ช่วยเขียนโค้ดภาษา PineScriptV.5',
  description: 'Chatbot ให้คำแนะนำเกี่ยวกับการเขียนโค้ดภาษา PineScript',
  copyright: 'HAP',
  privacy_policy: '',
  default_language: 'th-Hans',
}


export const isShowPrompt = true
export const promptTemplate = 'I want you to act as a javascript console.'


export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
