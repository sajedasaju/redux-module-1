import Button from "./Button";
import Count from "./Count";


export default function Counter({ id, increment, decrement, count }) {

    // const Counter = () => {
    return (
        <div
            class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            {/* <div class="text-2xl font-semibold">{count}
               
            </div> */}
            <Count count={count} />
            <div class="flex space-x-3">
                {/* <button onClick={() => increment(id)}
                    class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                >
                    Increment
                </button>
                <button onClick={() => decrement(id)}
                    class="bg-red-400 text-white px-3 py-2 rounded shadow"
                >
                    Decrement
                </button> */}
                <Button handler={() => increment(id)} >Increament</Button>
                <Button handler={() => decrement(id)} >Decreament</Button>
            </div>
        </div>
    );
};

// export default Counter;