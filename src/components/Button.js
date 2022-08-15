

export default function Button({ children, handler }) {

    return (
        <button onClick={handler}
            class={` text-white px-3 py-2 rounded shadow ${(children === 'Increament') ? 'bg-indigo-400' : 'bg-red-400'}`}
        >
            {children}
        </button>
    )
}
