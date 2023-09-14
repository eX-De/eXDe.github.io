<script setup>
import BookComponent from "./BookComponent.vue";
import PaperComponent from "./PaperComponent.vue";

let handleJump = (val) => {
  window.location.href = val
}
const papers = [
  {
    title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
    abstract: 'We explore how generating a chain of thought -- a series of intermediate reasoning steps -- significantly' +
        ' improves the ability of large language models to perform complex reasoning. In particular, we show how such ' +
        'reasoning abilities emerge naturally in sufficiently large language models via a simple method called chain ' +
        'of thought prompting, where a few chain of thought demonstrations are provided as exemplars in prompting. ' +
        'Experiments on three large language models show that chain of thought prompting improves performance on a ' +
        'range of arithmetic, commonsense, and symbolic reasoning tasks. The empirical gains can be striking. For ' +
        'instance, prompting a 540B-parameter language model with just eight chain of thought exemplars achieves ' +
        'state of the art accuracy on the GSM8K benchmark of math word problems, surpassing even finetuned GPT-3 ' +
        'with a verifier.',
    link1: 'https://arxiv.org/abs/2201.11903',
    enable_link2: false,
    link2: ''
  },
  {
    title: 'Large Language Model Is Semi-Parametric Reinforcement Learning Agent',
    abstract: 'Inspired by the insights in cognitive science with respect to human memory and reasoning mechanism, ' +
        'a novel evolvable LLM-based (Large Language Model) agent framework is proposed as REMEMBERER. By equipping ' +
        'the LLM with a long-term experience memory, REMEMBERER is capable of exploiting the experiences from the past' +
        ' episodes even for different task goals, which excels an LLM-based agent with fixed exemplars or equipped with' +
        ' a transient working memory. We further introduce Reinforcement Learning with Experience Memory (RLEM) to ' +
        'update the memory. Thus, the whole system can learn from the experiences of both success and failure, and ' +
        'evolve its capability without fine-tuning the parameters of the LLM. In this way, the proposed REMEMBERER ' +
        'constitutes a semi-parametric RL agent. Extensive experiments are conducted on two RL task sets to evaluate ' +
        'the proposed framework. The average results with different initialization and training sets exceed the ' +
        'prior SOTA by 4% and 2% for the success rate on two task sets and demonstrate the superiority and robustness' +
        ' of REMEMBERER.',
    link1: 'https://arxiv.org/abs/2306.07929',
    enable_link2: false,
    link2: ''
  },
  {
    title: 'It’s Not Just Size That Matters: Small Language Models Are Also Few-Shot Learners',
    abstract: 'When scaled to hundreds of billions of parameters, pretrained language models such as GPT-3 ' +
        '(Brown et al., 2020) achieve remarkable few-shot performance. However, enormous amounts of compute are ' +
        'required for training and applying such big models, resulting in a large carbon footprint and making it ' +
        'difficult for researchers and practitioners to use them. We show that performance similar to GPT-3 can be' +
        ' obtained with language models that are much “greener” in that their parameter count is several orders ' +
        'of magnitude smaller. This is achieved by converting textual inputs into cloze questions that contain a ' +
        'task description, combined with gradient-based optimization; exploiting unlabeled data gives further improvements.' +
        ' We identify key factors required for successful natural language understanding with small language models.',
    link1: 'https://arxiv.org/abs/2307.10169',
    enable_link2: false,
    link2: ''
  },
  {
    title: 'Challenges and Applications of Large Language Models',
    abstract: 'Large Language Models (LLMs) went from non-existent to ubiquitous in the machine learning discourse ' +
        'within a few years. Due to the fast pace of the field, it is difficult to identify the remaining challenges' +
        ' and already fruitful application areas. In this paper, we aim to establish a systematic set of open problems' +
        ' and application successes so that ML researchers can comprehend the field\'s current state more quickly and' +
        ' become productive.',
    link1: 'https://aclanthology.org/2021.naacl-main.185/',
    enable_link2: false,
    link2: ''
  },

  {
    title: 'Lost in the Middle: How Language Models Use Long Contexts',
    abstract: 'While recent language models have the ability to take long contexts as input, relatively little ' +
        'is known about how well they use longer context. We analyze language model performance on two tasks that' +
        ' require identifying relevant information within their input contexts: multi-document question answering' +
        ' and key-value retrieval. We find that performance is often highest when relevant information occurs at' +
        ' the beginning or end of the input context, and significantly degrades when models must access relevant' +
        ' information in the middle of long contexts. Furthermore, performance substantially decreases as the' +
        ' input context grows longer, even for explicitly long-context models. Our analysis provides a better ' +
        'understanding of how language models use their input context and provides new evaluation protocols for ' +
        'future long-context models.',
    link1: 'https://arxiv.org/abs/2307.03172',
    enable_link2: false,
    link2: ''
  }
]
</script>

<template>
  <div class="tab-root">
    <paper-component
        v-for="(paper, index) in papers"
        :paper_id="'paper' + index"
        :img_url="paper.img_url"
        :title="paper.title"
        :abstract="paper.abstract"
        :description="$t('bookpage.papers[' + index + '].description')"
        :link1="paper.link1"
        :enable_link2="paper.enable_link2"
        :link2="paper.link2"
    ></paper-component>
  </div>
</template>

<style scoped>
</style>