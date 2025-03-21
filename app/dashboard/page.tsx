import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import StudentsTable from '@/components/students/StudentsTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='Posts'
          count={8}
          icon={<Newspaper className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Categories'
          count={1200}
          icon={<Folder className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Users'
          count={7500}
          icon={<User className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Comments'
          count={1200}
          icon={<MessageCircle className='text-slate-500' size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable title='Latest Posts' limit={1000} />
      <StudentsTable title='LES ELEVES' limit={1000} />
    </>
  );
}

