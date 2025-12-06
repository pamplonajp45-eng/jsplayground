const[timer, setTimer]  = ({
    seconds:0,
    isRunning:false,
    isFalse:false,
});

const [history, setHistory]  = useState([]);

setSeconds(prev  => prev + 1);