
import { useAuth } from '../../../context/AuthContext'; // تأكد من المسار الصحيح لملف AuthContext

const InfoSection = () => { // تم تسمية المكون InfoSection
  const { userName } = useAuth(); // جلب اسم المستخدم من الـ AuthContext

  return (
    <div className="mb-8"> {/* أضف margin-bottom لإعطاء مسافة بعد هذا القسم */}
      <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userName || 'Seller'}!</h1>
      <span className='text-gray-500'>Here's Your Current Sales Overview</span>
    </div>
  );
};

export default InfoSection;