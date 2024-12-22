import divider from '~/assets/images/divider.png';
export default function Divider() {
  return (
    <div className='w-full flex justify-center items-center my-10'>
      <img src={divider} alt='divider' className='w-1/2' />
    </div>
  );
}
