
import { QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import PostsComponent from './components/PostsComponent'
 import { QueryClient, QueryClientProvider } from 'react-query';


 
const queryClient = new QueryClient();

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <PostsComponent/>
    </QueryClientProvider>
      
    </>
  )
}

export default App
