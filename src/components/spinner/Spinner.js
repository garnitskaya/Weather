const Spinner = () => {
    return (
        <div >
            <svg style={{ 'display': 'block', 'margin': '50px auto' }} width="64px" height="64px" viewBox="0 0 128 128" >
                <path fill="#000000" className="cls-1" d="M64 127.75a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM125.72 65h-13.75A47.86 47.86 0 0 1 65 111.73v13.74A61.73 61.73 0 0 0 125.72 65zM65 65v21.95A23.2 23.2 0 0 0 87.2 65H65zm22.2-2A23.22 23.22 0 0 0 65 40.55V63h22.23zm-46.37 2A23.2 23.2 0 0 0 63 86.95V65H40.8zM63 63V40.55A23.22 23.22 0 0 0 40.78 63H63zm-24.2 2H18.3A45.85 45.85 0 0 0 63 109.72V88.95A25.2 25.2 0 0 1 38.8 65zm0-2A25.2 25.2 0 0 1 63 38.55V18.03A45.85 45.85 0 0 0 18.28 63h20.5zM65 38.55A25.2 25.2 0 0 1 89.2 63h20.77A45.85 45.85 0 0 0 65 18.03v20.52zM89.2 65A25.2 25.2 0 0 1 65 88.95v20.77A45.85 45.85 0 0 0 109.97 65H89.2zM63 125.47v-13.75A47.86 47.86 0 0 1 16.28 65h-14A61.73 61.73 0 0 0 63 125.47zM2.27 63h14A47.86 47.86 0 0 1 63 16.03v-14A61.73 61.73 0 0 0 2.27 63zM65 2.02v14A47.86 47.86 0 0 1 111.98 63h13.75A61.73 61.73 0 0 0 65 2.02z" />
                <g><linearGradient id="linear-gradient">
                    <stop offset="0%" stopColor="#000000" />
                    <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
                    <path fill="url(#linear-gradient)" fillOpacity="0.5" d="M65.128,64.894l0.025,60.968a61.781,61.781,0,0,1-32.011-8.315q-0.705-.406-1.4-0.83L62.531,63.4Z" />
                    <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="2280ms" repeatCount="indefinite"></animateTransform>
                    <path fill="#000000" d="M62.531,63.4l2.6,1.5L34.257,118.374l-2.6-1.5Z" />
                </g>
                <circle fill="#000000" cx="55.641" cy="97.563" r="6.047">
                    <animate attributeName="opacity" dur="2280ms" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="1;0" />
                </circle>
            </svg>
        </div>
    )
}

export default Spinner;