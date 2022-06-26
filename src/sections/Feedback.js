import Comment from '../components/Comment'
import FeedbackImage1 from '../resources/feedback/feedback-1.jpg'
import FeedbackImage2 from '../resources/feedback/feedback-2.jpg'
import FeedbackImage3 from '../resources/feedback/feedback-3.jpg'

const comments = [{
  name: 'Anastasia Dan',
  team: 'UX Board',
  image: FeedbackImage1
}, {
  name: 'Roman Level',
  team: 'App Name',
  image: FeedbackImage2
}, {
  name: 'Alex Sacket',
  team: 'Reform Layouts',
  image: FeedbackImage3
}]

const Feedback = () => (
  <section className="flex flex-col items-center gap-2 md:gap-4 text-center py-14 md:py-20">
    <h3 className="text-2xl md:text-4xl text-neutral-50 font-extrabold">Don't take our word for it</h3>
    <p className="text-base md:text-xl text-neutral-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus <br className="hidden md:block" /> nulla at volutpat diam ut venenatis tellus — in ornare.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-16">
      { comments.map((comment, i) => (
        <Comment key={ i } name={ comment.name } team={ comment.team } image={ comment.image } />
      )) }
    </div>
  </section>
)

export default Feedback