import React from 'react'
import Person from './Person'

function NameList() {
   
    const persons = [
        {
            id: 1,
            name:'Rohan',
            age:30
        },
        {
            id: 2,
            name:'Varun',
            age:32
        },
        {
            id: 3,
            name:'Siddharth',
            age:25
        }
    ]

    const personList = persons.map(person => <Person person={person} />   )
    return  <div>{personList}</div>

}

export default NameList
