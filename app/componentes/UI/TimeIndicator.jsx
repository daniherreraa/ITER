
const TimeIndicator = ({firstDistance, secondDistance}) => {

  let totalLightYearDistance = Math.abs(firstDistance - secondDistance);
  let totalLightKm = totalLightYearDistance * 9.4607E+12;
  const starshipSpeed = 40234;
  let tiempoHoras = totalLightKm / starshipSpeed;
  let tiempoDias = tiempoHoras / 24;

  return (
    <div id="timeIndicator" className={`w-52 h-16 bg-color1 flex flex-col align-middle bottom-0 right-0 absolute pt-1 pb-1 px-1 gap-3 z-10`}>
       <div className="h-[10%] w-full">
        <h6 className="text-xs">Duración (Días terrestres)</h6>
       </div>
       <div className="h-[90%] w-full">
        <h4 className=" text-4xl text-end overflow-hidden" style={{fontFamily: 'myFont'}}>{tiempoDias.toFixed(2)}</h4>
       </div>
    </div>
  )
}

export default TimeIndicator