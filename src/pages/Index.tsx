import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const hobbies = [
    {
      title: "Живопись",
      description: "Масляная живопись, акварель, пастель",
      icon: "Palette",
      level: "Новичок",
      price: "от 2000₽",
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Астрономия",
      description: "Наблюдение звёзд, планет, космоса",
      icon: "Telescope",
      level: "Средний",
      price: "от 3500₽",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Головоломки",
      description: "Логические игры, кроссворды, судоку",
      icon: "Puzzle",
      level: "Любой",
      price: "от 1500₽",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Фотография",
      description: "Портретная, пейзажная, студийная съёмка",
      icon: "Camera",
      level: "Новичок",
      price: "от 4000₽",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Музыка",
      description: "Гитара, пианино, вокал",
      icon: "Music",
      level: "Любой",
      price: "от 2500₽",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      title: "Чтение",
      description: "Литературные клубы, книжные обзоры",
      icon: "BookOpen",
      level: "Любой",
      price: "от 1000₽",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  const mentors = [
    {
      name: "Анна Петрова",
      specialty: "Живопись",
      experience: "12 лет",
      rating: 4.9,
      reviews: 127
    },
    {
      name: "Дмитрий Козлов",
      specialty: "Астрономия",
      experience: "8 лет",
      rating: 4.8,
      reviews: 93
    },
    {
      name: "Мария Волкова",
      specialty: "Фотография",
      experience: "15 лет",
      rating: 5.0,
      reviews: 201
    },
    {
      name: "Игорь Смирнов",
      specialty: "Музыка",
      experience: "20 лет",
      rating: 4.9,
      reviews: 156
    }
  ];

  return (
    <div className="min-h-screen bg-tertiary">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Compass" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">HobbySearch</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#catalog" className="text-gray-600 hover:text-primary">Каталог</a>
            <a href="#test" className="text-gray-600 hover:text-primary">Тестирование</a>
            <a href="#mentors" className="text-gray-600 hover:text-primary">Менторы</a>
            <a href="#search" className="text-gray-600 hover:text-primary">Поиск</a>
          </nav>
          <Button variant="outline">Войти</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Найди своё идеальное хобби</h2>
          <p className="text-xl mb-8 opacity-90">Агентство поиска увлечений поможет открыть новые грани себя</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Начать поиск
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Пройти тест
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Каталог хобби</h2>
            <p className="text-xl text-gray-600">Более 100 видов увлечений для любого возраста и интереса</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-full ${hobby.color}`}>
                      <Icon name={hobby.icon} size={24} />
                    </div>
                    <Badge variant="secondary">{hobby.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{hobby.title}</CardTitle>
                  <CardDescription>{hobby.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{hobby.price}</span>
                    <Button>Узнать больше</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section id="test" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тестирование на подходящее хобби</h2>
            <p className="text-xl text-gray-600">Ответьте на вопросы и получите персональные рекомендации</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Начните с простого теста</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-lg mb-3">Что вас больше привлекает?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="justify-start h-auto p-4">
                        <Icon name="Palette" size={20} className="mr-3" />
                        Творческая деятельность
                      </Button>
                      <Button variant="outline" className="justify-start h-auto p-4">
                        <Icon name="Dumbbell" size={20} className="mr-3" />
                        Физическая активность
                      </Button>
                      <Button variant="outline" className="justify-start h-auto p-4">
                        <Icon name="BookOpen" size={20} className="mr-3" />
                        Интеллектуальные занятия
                      </Button>
                      <Button variant="outline" className="justify-start h-auto p-4">
                        <Icon name="Users" size={20} className="mr-3" />
                        Социальная деятельность
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button className="bg-primary text-white" size="lg">
                      Продолжить тест
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши менторы</h2>
            <p className="text-xl text-gray-600">Опытные преподаватели помогут освоить любое хобби</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{mentor.name}</CardTitle>
                  <CardDescription>{mentor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <Icon name="Star" size={16} className="text-yellow-400 mr-1" />
                      <span className="font-semibold">{mentor.rating}</span>
                      <span className="text-gray-500 ml-1">({mentor.reviews})</span>
                    </div>
                    <p className="text-gray-600">{mentor.experience} опыта</p>
                    <Button className="w-full mt-4">Записаться</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Найти увлечение</h2>
            <p className="text-xl text-gray-600">Используйте фильтры для поиска идеального хобби</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input placeholder="Поиск по названию хобби..." className="h-12" />
                  </div>
                  <Button className="bg-primary text-white" size="lg">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Уровень сложности</label>
                    <select className="w-full p-3 border rounded-md">
                      <option>Любой</option>
                      <option>Новичок</option>
                      <option>Средний</option>
                      <option>Продвинутый</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Бюджет</label>
                    <select className="w-full p-3 border rounded-md">
                      <option>Любой</option>
                      <option>До 2000₽</option>
                      <option>2000-5000₽</option>
                      <option>Более 5000₽</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Категория</label>
                    <select className="w-full p-3 border rounded-md">
                      <option>Все категории</option>
                      <option>Творчество</option>
                      <option>Спорт</option>
                      <option>Наука</option>
                      <option>Музыка</option>
                    </select>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Compass" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">HobbySearch</h3>
              </div>
              <p className="text-gray-400">Агентство поиска хобби — ваш путь к новым увлечениям</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Поиск хобби</li>
                <li>Тестирование</li>
                <li>Менторство</li>
                <li>Групповые занятия</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Контакты</li>
                <li>Блог</li>
                <li>Карьера</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@hobbysearch.ru</p>
                <p>📞 +7 (495) 123-45-67</p>
                <p>📍 Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HobbySearch. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;