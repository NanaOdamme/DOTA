import React from 'react';

const FAQsList = () => {
  const faqs = [
    {
      question: 'What types of digital assets can I trade on your platform?',
      answer: 'You can trade cryptocurrencies, tokens, NFTs, and digital securities on our platform.'
    },
    {
      question: 'How do I deposit funds into my account?',
      answer: 'You can deposit funds via bank transfer, credit/debit card, or cryptocurrency.'
    },
    {
      question: 'Is my personal information secure on your platform?',
      answer: 'Yes, we use advanced encryption and security measures to protect your personal information.'
    },
    {
      question: 'What are the fees for trading digital assets?',
      answer: 'Our trading fees vary based on the type of asset and transaction volume. You can find detailed fee information in your account settings.'
    },
    {
      question: 'Can I withdraw funds to my bank account?',
      answer: 'Yes, you can withdraw funds to your linked bank account. Withdrawal processing times may vary.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes, we have a dedicated customer support team available 24/7 to assist you with any issues or questions.'
    },
    {
      question: 'Are there any restrictions on who can use your platform?',
      answer: 'You must be of legal age and comply with our terms of service to use our platform. Certain jurisdictions may have additional restrictions.'
    },
    {
      question: 'How can I secure my account?',
      answer: 'We recommend enabling two-factor authentication (2FA) and using a strong, unique password to secure your account.'
    },
    {
      question: 'Can I cancel a trade after placing an order?',
      answer: 'Once an order is placed, it cannot be canceled. Please review your orders carefully before confirming.'
    },
    {
      question: 'Do you provide investment advice?',
      answer: 'We do not provide investment advice. Please conduct your own research or consult a financial advisor before making investment decisions.'
    }
  ];

  return (
    <section className='bg-rose-500 pt-20 flex justify-center'>
    <div className="m-7 dark:bg-zinc-800 dark:text-white bg-white p-8 rounded-lg shadow-lg mb-4">
      <h2 className="text-4xl text-center  font-bold mb-10">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
          <p className="text-gray-600 dark:text-green-300">{faq.answer}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default FAQsList;
