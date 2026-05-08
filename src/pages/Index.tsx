import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Phone, MapPin, Star, Hammer, Ruler, Sparkles, ShieldCheck,
  MessageCircle, ClipboardCheck, Wrench, CheckCircle2, ArrowRight,
} from "lucide-react";
import heroFloor from "@/assets/hero-floor.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import workLaminate from "@/assets/work-laminate.jpg";
import workParquet from "@/assets/work-parquet.jpg";
import workScreed from "@/assets/work-screed.jpg";

const PHONE = "+7 (843) 207-15-48";
const PHONE_HREF = "tel:+78432071548";
const WHATSAPP = "https://wa.me/78432071548";
const ADDRESS = "г. Казань, ул. Парижской Коммуны, 8";
const YANDEX_MAPS = "https://yandex.ru/maps/?text=Казань%20ремонт%20полов";

const services = [
  { icon: Hammer, title: "Укладка ламината и паркета", desc: "Доска, паркетная доска, ламинат 32–34 класса. Аккуратный монтаж, подгонка без щелей.", price: "от 450 ₽/м²", img: workLaminate },
  { icon: Sparkles, title: "Шлифовка и реставрация паркета", desc: "Циклёвка старого паркета, шпатлёвка щелей, лак или масло. Возвращаем пол к жизни без замены.", price: "от 550 ₽/м²", img: workParquet },
  { icon: Ruler, title: "Стяжка и выравнивание", desc: "Полусухая и наливная стяжка, демонтаж старого основания, гидроизоляция.", price: "от 600 ₽/м²", img: workScreed },
];

const reviews = [
  { name: "Альбина Г.", text: "Шлифовали старый паркет в квартире на Декабристов. Сделали в срок, пыли почти не было. Пол стал как новый.", stars: 5 },
  { name: "Рустем М.", text: "Уложили ламинат на 78 м² за 3 дня. Замер провели бесплатно, смета без сюрпризов. Работают аккуратно.", stars: 5 },
  { name: "Елена П.", text: "Делали стяжку перед укладкой. Ровно, без трещин. Понравилось, что объяснили этапы и сроки заранее.", stars: 5 },
];

const steps = [
  { n: "01", title: "Заявка и звонок", desc: "Перезваниваем в течение 15 минут, уточняем объём и сроки." },
  { n: "02", title: "Бесплатный замер", desc: "Мастер приезжает на объект, делает замер и фиксированную смету." },
  { n: "03", title: "Договор и работы", desc: "Подписываем договор. Работаем чисто, выносим мусор после смены." },
  { n: "04", title: "Сдача с гарантией", desc: "Принимаете пол лично. Гарантия на работы — 2 года." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", area: "", note: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Заполните имя и телефон");
      return;
    }
    toast.success("Заявка принята. Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", area: "", note: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-primary text-primary-foreground grid place-items-center">
              <Hammer className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-base">Строй и Радуйся</div>
              <div className="text-xs text-muted-foreground">Ремонт полов в Казани</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#services" className="hover:text-accent transition">Услуги</a>
            <a href="#portfolio" className="hover:text-accent transition">Работы</a>
            <a href="#process" className="hover:text-accent transition">Как работаем</a>
            <a href="#reviews" className="hover:text-accent transition">Отзывы</a>
            <a href="#contacts" className="hover:text-accent transition">Контакты</a>
          </nav>
          <a href={PHONE_HREF} className="hidden sm:flex items-center gap-2 text-sm font-semibold hover:text-accent">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroFloor} alt="Отреставрированный паркет в квартире" className="w-full h-full object-cover" width={1600} height={1024} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative container py-20 md:py-32 text-primary-foreground">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/15 backdrop-blur text-sm mb-6 border border-background/20">
              <MapPin className="w-4 h-4" /> Казань · работаем 5 лет
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-5">
              Ремонт полов под ключ — без переделок и сюрпризов в смете
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
              Шлифовка паркета, укладка ламината и стяжка в Казани и пригороде.
              Бесплатный замер, фиксированная цена, гарантия 2 года.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-14 px-7 text-base">
                <a href="#request">Оставить заявку <ArrowRight className="ml-1 w-4 h-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/10 backdrop-blur border-background/30 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground h-14 px-7 text-base">
                <a href={PHONE_HREF}><Phone className="mr-2 w-4 h-4" /> {PHONE}</a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <span><b>4.9</b> на Яндекс.Картах · 87 отзывов</span>
              </div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent" /> Договор и гарантия 2 года</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-center">
          {[
            { n: "5 лет", t: "на рынке Казани" },
            { n: "320+", t: "выполненных объектов" },
            { n: "4.9★", t: "средний рейтинг" },
            { n: "2 года", t: "гарантия на работы" },
          ].map((x) => (
            <div key={x.t}>
              <div className="text-2xl md:text-3xl font-extrabold text-primary">{x.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{x.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-20">
        <div className="max-w-2xl mb-12">
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Услуги</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Что делаем с полами</h2>
          <p className="text-muted-foreground">Берём объекты от 15 м². Работаем в квартирах, домах и небольших коммерческих помещениях.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="overflow-hidden border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" width={1024} height={768} />
              </div>
              <div className="p-6">
                <s.icon className="w-7 h-7 text-accent mb-3" />
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-bold text-primary">{s.price}</span>
                  <a href="#request" className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1">
                    Заказать <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio / Before-after */}
      <section id="portfolio" className="bg-secondary/40 py-20">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Наши работы</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">До и после</h2>
            <p className="text-muted-foreground">Фото с реальных объектов. Можем показать ещё в WhatsApp — пишите, пришлём подборку под ваш случай.</p>
          </div>
          <div className="rounded-xl overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
            <img src={beforeAfter} alt="До и после реставрации паркета" loading="lazy" className="w-full" width={1280} height={768} />
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[workParquet, workLaminate, workScreed].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                <img src={img} alt={`Объект ${i+1}`} loading="lazy" className="w-full h-full object-cover" width={1024} height={768} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="container py-20">
        <div className="max-w-2xl mb-12">
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Как работаем</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">4 простых шага</h2>
          <p className="text-muted-foreground">Без давления и навязанных услуг. Сначала смотрим объект, потом считаем.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = [MessageCircle, Ruler, Wrench, ClipboardCheck][i];
            return (
              <div key={s.n} className="relative p-6 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="text-5xl font-extrabold text-accent/20 absolute top-3 right-4">{s.n}</div>
                <Icon className="w-7 h-7 text-accent mb-3" />
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Отзывы</div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">4.9 ★ на Яндекс.Картах</h2>
              <p className="text-primary-foreground/75">87 отзывов реальных клиентов из Казани</p>
            </div>
            <Button asChild variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary w-fit">
              <a href={YANDEX_MAPS} target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4 mr-2" /> Все отзывы на картах
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                <div className="flex mb-3">
                  {[...Array(r.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-primary-foreground/90 mb-4 leading-relaxed">«{r.text}»</p>
                <div className="text-sm text-primary-foreground/60">— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="container py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Заявка</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Бесплатный замер и смета</h2>
            <p className="text-muted-foreground mb-6">
              Оставьте заявку — перезвоним в течение 15 минут, согласуем удобное время для замера.
              После осмотра пришлём фиксированную смету. Если цена не подойдёт — ничего не должны.
            </p>
            <ul className="space-y-3">
              {[
                "Замер и расчёт — бесплатно",
                "Фиксированная цена в договоре",
                "Свои инструменты и материалы со скидкой",
                "Уборка после работ",
                "Гарантия 2 года",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="p-6 md:p-8 border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Ваше имя</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Например, Айдар" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Телефон *</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" type="tel" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Площадь, м²</label>
                <Input value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} placeholder="например, 45" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Что нужно сделать</label>
                <Textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} placeholder="Шлифовка паркета, укладка ламината, стяжка…" rows={3} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-13">
                Получить смету
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-secondary/40 py-16">
        <div className="container grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-accent mb-3"><Phone className="w-5 h-5" /><span className="text-sm font-semibold uppercase tracking-wider">Телефон</span></div>
            <a href={PHONE_HREF} className="text-2xl font-bold hover:text-accent">{PHONE}</a>
            <p className="text-sm text-muted-foreground mt-2">Пн–Сб 9:00 — 20:00</p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline mt-3">
              <MessageCircle className="w-4 h-4" /> Написать в WhatsApp
            </a>
          </div>
          <div>
            <div className="flex items-center gap-2 text-accent mb-3"><MapPin className="w-5 h-5" /><span className="text-sm font-semibold uppercase tracking-wider">Адрес</span></div>
            <div className="text-lg font-semibold">{ADDRESS}</div>
            <p className="text-sm text-muted-foreground mt-2">Работаем по всей Казани и пригороду — выезд бесплатный</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-accent mb-3"><ShieldCheck className="w-5 h-5" /><span className="text-sm font-semibold uppercase tracking-wider">Реквизиты</span></div>
            <div className="text-sm">ИП «Строй и Радуйся»</div>
            <p className="text-sm text-muted-foreground mt-2">Договор, чек, безналичный расчёт</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Строй и Радуйся · Казань</div>
          <div>Ремонт полов · Шлифовка паркета · Укладка ламината · Стяжка</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
