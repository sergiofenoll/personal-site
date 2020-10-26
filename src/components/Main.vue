<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3"></v-col>
      <v-col cols="12" md="6">
        <h1></h1>
        <p>
          <span class="small-caps"
            >I'm not really sure what to write here.</span
          >
          Hi, my name is Sergio and I own this domain name. How cool is that,
          huh? Every year I hand some money over to Google just so some other
          companies can update their DNS entries and point people to the right
          IP. Isn't the Internet nifty? Anyway, if you're here... well if you're
          here I'm frankly very surprised because I have shared this site with
          about
          <vue-mathjax formula="$\lim_{n \to \infty} \frac{1}{n}$" />
          people.
        </p>
        <v-card style="width: 40%; margin-right: 16px; float: left">
          <v-img
            src="../assets/images/me.jpg"
            width="100%"
            alt="An image of me drinking a beer."
          />
          <v-card-text>
            A picture of me. Don't be fooled though, I am bald now. I just
            haven't gotten a nice picture taken, so I'm still rocking the last
            pretty picture of myself I can find.
          </v-card-text>
        </v-card>
        <p>
          Since you're here, I'll assume you want to know something about me. As
          stated above, my name is Sergio but I'm also known online as
          <strong>Greyoda</strong>, and sometimes <code>sff</code>. There should
          be a picture of me somewhere on this page, I haven't decided where
          yet. I am currently trying to get a Master's degree of Computer
          Science at the University of Antwerp. I will (hopefully) be graduating
          in 2022 with a Software Engineering major.
        </p>
        <p>
          In my free time, I enjoy programming and tinkering with Linux. Maybe
          I'll elaborate about this at some point, maybe I won't. Who knows. For
          active-type hobbies, I really enjoy biking. Well, I really like bikes
          as a concept, riding them is really secondary. The concept of two
          triangles and two circles working together to let you soar across the
          earth is quite endearing to me.
        </p>
        <p>
          For creative hobbies, I'm very big into cooking. I enjoy learning new
          things, and I think food is a great way to learn about people and
          cultures, plus it is also quite useful and tasty. I enjoy fermenting
          and pickling stuff, sometimes I even brew my own beer. Who knows,
          maybe one day, after spending 30 years of my life programming for a
          living I'll quit my job and become a professional cook. I doubt it
          though. Yes, this is a reference to
          <a href="https://en.wikipedia.org/wiki/Nathan_Myhrvold"
            >Nathan Myhrvold</a
          >.
        </p>
        <p>
          In case you care, this site is made using
          <a href="https://vuejs.org/">Vue</a> and hosted on
          <a href="https://www.netlify.com/">Netlify</a> for no other reason
          than because I wanted to give both of them a try. They're
          <em>okay</em>. Anyway, have some <vue-mathjax formula="$\LaTeX$" /> I
          plucked from an old math assignment:
        </p>
        <vue-mathjax
          formula="$$a_j = \frac{2}{n} * \sum_{k=0}^{n-1}(x_k*cos(j*t_k) \qquad b_j = \frac{2}{n} * \sum_{k=0}^{n-1}(x_k*sin(j*t_k)$$"
        />
        <p>
          Avid readers of the links I post in Discord might realize that this
          page's layout is a blatant rip-off of the excellent
          <a href="https://gwern.net">Gwern.net</a>. Frankly, I think that site
          is just very pretty and I really like it, so I more or less copied the
          style. Who knows, maybe one day I'll grow bored and do something else,
          or maybe I'll get creative and give it my own touch. They do say that
          <q>imitation is the sincerest form of flattery</q>. I'm still not sure
          who <q>they</q> are, to be honest.
        </p>
        <p>
          I would actually like to remove Netlify out of the equation, not
          because it's bad or anything, but rather because I'd like implementing
          a service like that myself. I'm yet sure how I'd want to do it,
          probably using webhooks? We'll see.
        </p>
      </v-col>
      <v-col cols="12" md="3"></v-col>
    </v-row>
  </v-container>
</template>


<script>
import VueMathjax from "./vue-mathjax";

export default {
  name: "Main",
  components: {
    VueMathjax,
  },
  title: "Home · Greyoda.dev",
};
</script>

<style scoped>
p.drop-caps::first-letter {
  font-family: "Kanzlei Initialen";
  float: left;
  font-size: 60px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
}
span.small-caps,
p.small-caps::first-line {
  font-variant: small-caps;
  font-weight: bold;
}
p + p {
  text-indent: 1em;
}
.MathJax_Container + p {
  margin-top: 16px;
}
</style>