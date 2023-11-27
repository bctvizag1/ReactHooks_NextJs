import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

import db from './firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query } from "firebase/firestore";


import styles from "@/styles/Home.module.css";

export default function index() {

  const initItem = { name: "", price: 0 };

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState(initItem);

  const inputName = useRef();

  //Add Item
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== '' && newItem.price != '') {
      // setItems([...items, newItem])      
      try {
        const docRef = await addDoc(collection(db, "items"), newItem);
        setNewItem(initItem)
        inputName.current.focus();
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  //Read Item
  useEffect(() => {
    const q = query(collection(db, 'items'));
    const unsubscribe = onSnapshot(q, (qItems) => {
      let itemArr = []
      qItems.forEach((doc) => {
        itemArr.push({ ...doc.data(), id: doc.id })
      });
      setItems(itemArr);

      return () => unsubscribe();
    })

  }, [])


  //Delete Item
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'items', id))
  }

  return (
    <div>
      <Head>
        <title>Expense Tracker</title>
      </Head>
      <main className={styles.main}>
        <div className="lg:flex items-center justify-between max-w-xl flex-col">
          <h2>Expense tracker</h2>
          <div>
            <form>
              <input
                type="text"
                placeholder="Enter Item"
                ref={inputName}
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }

              />

              <input
                type="number"
                className="text-center"
                value={newItem.price}
                onChange={(e) =>
                  setNewItem({ ...newItem, price: e.target.value })
                }

              />

              <button type="submit" onClick={addItem}> + </button>
            </form>
            <ul className="border-b-2">
              {items.map((i) => (

                <li key={i.id} className={styles.displist}>
                  <div className="capitalize">{i.name}</div>
                  <div>Rs. {i.price}</div>
                  <button onClick={() => deleteItem(i.id)}> Del </button>
                </li>

              ))}
            </ul>
            <div className={styles.displist}>
              <div className="font-extrabold">Total</div>
              <div className="font-extrabold">
                Rs.{" "}
                {items.length < 1
                  ? "0"
                  : items.reduce((total, i) => total + +i.price, 0)}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
