import useMultiStepForm from './hooks/useMultiStepForm';
import Department from './components/AppointmentDepartment/Department';
import Institution from './components/AppointmentInstitution/Institution';
import Instructions from './components/AppointmentInstruction/Instructions';
import Summary from './components/Summary/Summary';
import GeneralInfo from './components/AppoinmentDocAndTime/GeneralInfo';
import DatePicker from './components/AppointmentDate/Date';
import Verification from './components/Verification/Verification';
import { useState } from 'react';


const initialApointmentForm = {
  department: 0,
  institution : [],
  doctor: [],
  appointmentDate: new Date(),
  formattedAppointmentDate: "",
  appointmentTime: []
}

function App() {
  const [appointmentForm, setAppointmentForm] = useState(initialApointmentForm)
  const { steps, currentIndex, goBack, goForward, goToStart, step } = useMultiStepForm({steps: [
    <Department appointmentForm={appointmentForm} setAppointmentForm={setAppointmentForm}/>, 
    <Institution appointmentForm={appointmentForm} setAppointmentForm={setAppointmentForm}/>, 
    <DatePicker appointmentForm={appointmentForm} setAppointmentForm={setAppointmentForm}/>, 
    <GeneralInfo appointmentForm={appointmentForm} setAppointmentForm={setAppointmentForm}/>, 
    <Summary appointmentForm={appointmentForm}/>,
    <Verification appointmentForm={appointmentForm}/>
  ]})
  const [showInstructions, setShowInstructions] = useState(true)

  const handleBack = () => {
    if (currentIndex === 0) {
      // If we are at the first step, show the instructions
      setShowInstructions(true);
    } else {
      // Otherwise, go to the previous step
      goBack();
    }
  }

  const goBeginning = () => {
    setAppointmentForm(initialApointmentForm)
    setShowInstructions(true)
    goToStart()
  }
  return (
    <div className='mobile-wrapper'>
      <div className="container">
      {showInstructions ? <Instructions setShowInstructions={setShowInstructions}/> : (
      <>
      {step}
      <div className='bottom-navigation'>
        <p className='step-indicator'>{currentIndex + 1} of {steps.length}</p>
        <div className='nav-buttons'>
          {(currentIndex + 1 !== steps.length) && <button className='small back' onClick={handleBack}>Back</button>}
          {(currentIndex + 1 < steps.length - 1) ? (
              <button className='small next' onClick={goForward}>Next</button>
            ) : (
              (currentIndex + 1 === steps.length) ? (
                <button className='next large-btn' onClick={goBeginning}>Finish</button>
              ) : (
                <button className='small next' style={{color: 'white'}} onClick={goForward}>Confirm</button>
              )
            )}  
        </div>
      </div>
      </>
      )}
    </div>
    <div className='navigation'>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M21.04 7.00048L15.48 2.89048C13.8536 1.70317 11.6464 1.70317 10.02 2.89048L4.47 7.00048C3.39544 7.77462 2.7561 9.01612 2.75 10.3405V17.7705C2.81002 20.1637 4.79665 22.0564 7.19 22.0005H18.31C20.7034 22.0564 22.69 20.1637 22.75 17.7705V10.3305C22.7414 9.01185 22.1067 7.77576 21.04 7.00048ZM21.25 17.7705C21.1904 19.3354 19.8751 20.5568 18.31 20.5005H7.19C5.62698 20.5512 4.31502 19.333 4.25 17.7705V10.3405C4.25534 9.4904 4.66817 8.69448 5.36 8.20048L10.91 4.10048C12.0061 3.30006 13.4939 3.30006 14.59 4.10048L20.14 8.21048C20.8312 8.6959 21.2448 9.48583 21.25 10.3305V17.7705ZM8.25 15.7505H17.25C17.6642 15.7505 18 16.0863 18 16.5005C18 16.9147 17.6642 17.2505 17.25 17.2505H8.25C7.83579 17.2505 7.5 16.9147 7.5 16.5005C7.5 16.0863 7.83579 15.7505 8.25 15.7505Z" fill="#FFAD72"/>
        </svg>
        <p>Home</p>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
        <path d="M4.24 7.53H10.94C11.3129 7.48643 11.5941 7.17047 11.5941 6.795C11.5941 6.41953 11.3129 6.10357 10.94 6.06H4.24C3.95694 6.02693 3.68004 6.15934 3.52809 6.40044C3.37614 6.64153 3.37614 6.94847 3.52809 7.18956C3.68004 7.43066 3.95694 7.56307 4.24 7.53Z" fill="#FFAD72"/>
        <path d="M4.24 15.53H9.02C9.30306 15.5631 9.57996 15.4307 9.73192 15.1896C9.88387 14.9485 9.88387 14.6415 9.73192 14.4004C9.57996 14.1593 9.30306 14.0269 9.02 14.06H4.24C3.95694 14.0269 3.68004 14.1593 3.52809 14.4004C3.37614 14.6415 3.37614 14.9485 3.52809 15.1896C3.68004 15.4307 3.95694 15.5631 4.24 15.53Z" fill="#FFAD72"/>
        <path d="M12.85 11.53H4.24C3.95694 11.5631 3.68004 11.4307 3.52809 11.1896C3.37614 10.9485 3.37614 10.6415 3.52809 10.4004C3.68004 10.1593 3.95694 10.0269 4.24 10.06H12.85C13.2229 10.1036 13.5041 10.4195 13.5041 10.795C13.5041 11.1705 13.2229 11.4864 12.85 11.53Z" fill="#FFAD72"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.04 20.59H5.04C2.39294 20.5845 0.249994 18.4371 0.25 15.79V4.79C0.255501 2.14684 2.39684 0.00550088 5.04 0H12.04C14.6871 -5.74448e-06 16.8345 2.14294 16.84 4.79V15.79C16.84 17.063 16.3343 18.2839 15.4341 19.1841C14.5339 20.0843 13.313 20.59 12.04 20.59ZM5.04 1.59C3.27497 1.59549 1.84549 3.02497 1.84 4.79V15.79C1.83999 17.5589 3.27107 18.9945 5.04 19H12.04C13.8128 19 15.25 17.5628 15.25 15.79V4.79C15.2445 3.02107 13.8089 1.58999 12.04 1.59H5.04Z" fill="#FFAD72"/>
        </svg>
        <p>Articles</p>
      </div>
      <div className='active'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
        <path d="M1.02343 6.55498L8.94343 10.555C9.75113 10.9342 10.6857 10.9342 11.4934 10.555L20.2834 6.55498C20.6017 6.37886 20.7993 6.04376 20.7993 5.67998C20.7993 5.31619 20.6017 4.98109 20.2834 4.80498L11.4934 0.804975C11.1103 0.631142 10.6941 0.542437 10.2734 0.544975C9.81215 0.544686 9.35703 0.650767 8.94343 0.854975L1.02343 4.85497C0.729209 5.03731 0.550208 5.35884 0.550208 5.70497C0.550208 6.05111 0.729209 6.37264 1.02343 6.55498Z" fill="#FFAD72"/>
        <path d="M19.9634 9.00497L11.1134 12.695C10.5722 12.9509 9.94469 12.9509 9.40343 12.695L1.56343 9.00497C1.18498 8.83456 0.73981 8.99928 0.563426 9.37497C0.478785 9.5565 0.470266 9.76434 0.539768 9.95218C0.609269 10.14 0.751016 10.2923 0.933426 10.375L8.75343 14.005C9.23935 14.2419 9.77284 14.365 10.3134 14.365C10.7961 14.3658 11.2734 14.2635 11.7134 14.065L20.5334 10.395C20.9173 10.2376 21.1008 9.79881 20.9434 9.41497C20.786 9.03114 20.3473 8.84757 19.9634 9.00497Z" fill="#FFAD72"/>
        <path d="M19.9634 12.085L11.1134 15.775C10.5722 16.0309 9.94469 16.0309 9.40343 15.775L1.56343 12.095C1.3187 11.9824 1.03252 12.009 0.812698 12.1647C0.592873 12.3203 0.472796 12.5815 0.497698 12.8497C0.5226 13.1179 0.688699 13.3524 0.933425 13.465L8.75343 17.085C9.23865 17.325 9.7721 17.4515 10.3134 17.455C10.7968 17.4523 11.2741 17.3467 11.7134 17.145L20.5334 13.475C20.723 13.3999 20.8738 13.2509 20.9512 13.0622C21.0285 12.8735 21.0257 12.6615 20.9434 12.475C20.7788 12.0984 20.3418 11.9245 19.9634 12.085Z" fill="#FFAD72"/>
        </svg>
        <p>Service</p>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.8301 16.71L20.0701 17.85C20.2975 18.8356 20.073 19.8713 19.4577 20.6742C18.8425 21.4771 17.9009 21.9633 16.8901 22H7.61009C6.59927 21.9633 5.65766 21.4771 5.04244 20.6742C4.42722 19.8713 4.20266 18.8356 4.43009 17.85L4.67009 16.71C4.94613 15.1668 6.27272 14.0327 7.84009 14H16.6601C18.2275 14.0327 19.5541 15.1668 19.8301 16.71ZM16.8901 20.49C17.3979 20.4841 17.8758 20.2489 18.1901 19.85V19.86C18.5758 19.3762 18.7261 18.7458 18.6001 18.14L18.3601 17C18.2269 16.1552 17.5147 15.5226 16.6601 15.49H7.8401C6.98546 15.5226 6.27326 16.1552 6.1401 17L5.9001 18.14C5.77725 18.7426 5.92736 19.3687 6.3101 19.85C6.62443 20.2489 7.10231 20.4841 7.6101 20.49H16.8901Z" fill="#FFAD72"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.7501 12H11.7501C9.54094 12 7.75008 10.2092 7.75008 8.00001V5.36001C7.74741 4.46807 8.10056 3.61189 8.73126 2.98119C9.36196 2.35049 10.2181 1.99735 11.1101 2.00001H13.3901C14.282 1.99735 15.1382 2.35049 15.7689 2.98119C16.3996 3.61189 16.7527 4.46807 16.7501 5.36001V8.00001C16.7501 10.2092 14.9592 12 12.7501 12ZM11.1101 3.50002C10.0828 3.50002 9.25008 4.33277 9.25008 5.36001V8.00001C9.25008 9.38073 10.3694 10.5 11.7501 10.5H12.7501C14.1308 10.5 15.2501 9.38073 15.2501 8.00001V5.36001C15.2501 4.86671 15.0541 4.39361 14.7053 4.0448C14.3565 3.69598 13.8834 3.50002 13.3901 3.50002H11.1101Z" fill="#FFAD72"/>
        </svg>
        <p>Profile</p>
      </div>
    </div>
  </div>);
}

export default App;
