import AddTodo from "@/components/add-todo/AddTodo";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import TodosList from "@/components/todos-list/TodosList";

export default function Home() {
  return (
    <main>
      <Header />
      <AddTodo />
      <TodosList />
      <Footer />
    </main>
  )
}