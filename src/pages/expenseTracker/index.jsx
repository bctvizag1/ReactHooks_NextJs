import Head from 'next/head'
import React from 'react'

import styles from '@/styles/Home.module.css'

export default function index() {
  return (
    <div>
        <Head>
            <title>Expense Tracker</title>
        </Head>
        <main className={styles.test}>
            <h2 >Expense Tracker</h2>
        </main>
    </div>
  )
}
