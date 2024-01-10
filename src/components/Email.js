// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const EmailForm = () => {
//   const [toEmail, setToEmail] = useState('');

//   const handleInputChange = (e) => {
//     setToEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Use your email template and service ID from EmailJS
//     const templateParams = {
//       to_email: toEmail,
//     };

//     try {
//       // Use your template ID and user ID from EmailJS
//       const response = await emailjs.send(
//         'YOUR_SERVICE_ID',
//         'YOUR_TEMPLATE_ID',
//         templateParams,
//         'YOUR_USER_ID'
//       );

//       console.log('Email sent successfully!', response);
//     } catch (error) {
//       console.error('Failed to send email', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To Email:
//         <input
//           type="email"
//           value={toEmail}
//           onChange={handleInputChange}
//           required
//         />
//       </label>
//       <button type="submit">Send Email</button>
//     </form>
//   );
// };

// export default EmailForm;