export class Timer{

    currentSecondsTimer;
    totalSeconds;
    #timer;
    functionTimer;


    static formatTime(seconds){

        const minutes = Math.floor(seconds/60);
        const remainingSeconds = seconds % 60;

        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(remainingSeconds).padStart(2, "0");

        return `${formattedMinutes}:${formattedSeconds}`
    }

    // Empezará el timer
    startTimer(totalSeconds, functionTimer){

        if(this.#timer) throw new Error("No se puede crear más de un Timer a la vez");

        this.totalSeconds = totalSeconds;
        this.functionTimer = functionTimer;
        this.currentSecondsTimer = 1;
        this.controlTimer();


        this.#timer = setInterval(()=>{
            this.controlTimer();
        }, 1000);

    }

    pausedTimer(){

        clearInterval(this.#timer);
        this.#timer = null;


        return true;
    }

    continueTimer(){

        if(this.#timer) throw new Error("No se puede crear más de un Timer a la vez");

        if(!this.functionTimer) throw new Error("Debemos inicializar un Timer antes de continuarlo");

        this.#timer = setInterval(()=>{
            this.controlTimer();
        }, 1000);


        return true;
    }

    controlTimer(){

        if(this.currentSecondsTimer >= this.totalSeconds){
            // Se ha acabado
            this.pausedTimer();
            this.functionTimer(true, this.getTime());
            return;
        }

        this.functionTimer(false, this.getTime());
        this.currentSecondsTimer++;
       
    }

    getTime(){
        return Timer.formatTime( this.currentSecondsTimer );
    }

}
