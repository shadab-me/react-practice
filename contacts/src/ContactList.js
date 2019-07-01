import React, { Component } from 'react'
 



class ContactList extends Component {
     render(){
        
return (
    <ol className = "contact-list">
    {this.props.contacts.map((contact) => (
        <li key = {contact.id} className = 'contact-list-item'>
        <div className = 'contact-avartar' style={{
            backgroundImage: `url(${contact.avatarURl})`
        }}/>
        <div className = 'conatact-details'>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        
        </div>
        <button className = 'contact-remove'>
        Remove
        
        </button>
    
        </li>
    ))}
    </ol>
)
     }
 }
 export default ContactList