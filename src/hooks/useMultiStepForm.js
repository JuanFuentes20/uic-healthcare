import { useState } from 'react';

function useMultiStepForm({steps}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goBack = () => {
        setCurrentIndex(i => {
            if(i <= 0) return i
            return i - 1
        })
    }

    const goForward = (e) => {
        e.preventDefault()
        setCurrentIndex(i => {
            if(i >= steps.length - 1) return i
            return i + 1
        })
    }

    const goToStart = () => {
        setCurrentIndex(prev => 0)
    }

    return {
        steps,
        currentIndex,
        goBack,
        goForward,
        goToStart,
        step: steps[currentIndex]
    }
}

export default useMultiStepForm;