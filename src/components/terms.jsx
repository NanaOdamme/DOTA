import React, { useState } from 'react';

const TermsAndPrivacy = () => {
  const [agree, setAgree] = useState(false);
  const [notAgree, setNotAgree] = useState(false);

  const handleAgreeChange = () => {
    setAgree(!agree);
    if (notAgree) {
      setNotAgree(false);
    }
  };

  const handleNotAgreeChange = () => {
    setNotAgree(!notAgree);
    if (agree) {
      setAgree(false);
    }
  };

  const handleSubmit = () => {
    if (agree) {
        window.location.href = '/home';
      console.log('User agreed to terms and privacy.');
    } else if (notAgree) {
        window.location.href = '/';
      console.log('User did not agree to terms and privacy.');
    } else {
      // Handle when user has not selected either option
      console.log('Please agree or disagree to continue.');
    }
  };

  return (
    <section className='pt-20 h-screen bg-gray-200 dark:bg-zinc-800'>
    <div className="  max-w-md mx-auto p-6 bg-rose-300 dark:bg-rose-500 dark:text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Terms and Privacy</h2>
      <p className="text-gray-700 mb-4">
        Please read and agree to our terms and privacy policy before continuing.
      </p>
      <div className="mb-4">
        <input
          type="checkbox"
          id="agree"
          className="mr-2 form-checkbox h-5 w-5 text-blue-600"
          checked={agree}
          onChange={handleAgreeChange}
        />
        <label htmlFor="agree" className="text-gray-700">I agree to the terms and conditions:</label>
        <ul className="list-disc pl-6 mt-2">
          <li>
            By accessing or using our services, you agree to be bound by these terms and conditions.
          </li>
          <li>
            Our services are provided on an "as is" and "as available" basis without warranties of any kind.
          </li>
          <li>
            We may collect and use personal information in accordance with our privacy policy.
          </li>
          <li>
            You agree not to use our services for any illegal or unauthorized purpose.
          </li>
          <li>
            We reserve the right to modify or terminate our services at any time without prior notice.
          </li>
          <li>
            Any disputes arising from the use of our services shall be governed by the laws of [Your Country].
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="notAgree"
          className="mr-2 form-checkbox h-5 w-5 text-red-600"
          checked={notAgree}
          onChange={handleNotAgreeChange}
        />
        <label htmlFor="notAgree" className="text-gray-700">I do not agree to the terms and conditions.</label>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
    </section>
  );
};

export default TermsAndPrivacy;
