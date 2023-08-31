<script setup>
import {data} from '../data/data'
import { RouterLink } from 'vue-router';
</script>
<template>    
    <div class="bg-gray-100 h-full w-screen flex justify-center">
        <RouterLink to="/builder" class="bg-blue-500 py-2 px-5 rounded w-max h-max">Back to Builder</RouterLink>
        <button class="py-2 px-5 bg-blue-600 text-white rounded-sm h-max ml-5">Print</button>
        <div class="w-[960px] h-[1160px] bg-white m-10 p-10 rounded-md">
            <div class="mb-10">
                <h1 class="text-3xl font-bold">{{ data.basics.name }}</h1>
                <p class="">{{ data.basics.title }}</p>
                <p class="">{{ data.basics.location.city }}, {{ data.basics.location.country }}"</p>
            </div>
            <div class="border-4 border-gray-400 my-3"></div>
            <div class="flex gap-5">
                <!-- Left  -->
                <div class="w-1/2 flex flex-col gap-2">
                    <div>
                        <p><span class="font-bold">Portfolio :</span> <a :href="`https://${data.basics.portfolio}`">{{ data.basics.portfolio}} ↗</a></p>
                        <!-- <p><span class="font-bold">Github :</span> <a :href="`https://github.com/${data.basics.github}`">{{ data.basics.github }} ↗</a></p> -->
                        <p><span class="font-bold">Email :</span> <a href="">{{ data.basics.email }} ↗</a></p>
                        <p><span class="font-bold">Phone :</span> <a href="">{{ data.basics.phone }} ↗</a></p>
                    </div>
                    <div class="border-4 border-gray-400"></div>
                    <!-- Career Summary -->
                    <div>
                        <h1 class="font-bold uppercase">Summary</h1>
                        <p>{{ data.basics.summary }}</p>
                    </div>
                    <div class="border-4 border-gray-400"></div>

                    <!-- Education -->
                    <div class="flex flex-col gap-2">
                        <h1 class="font-bold uppercase">Education</h1>
                        <div>
                            <p class="text-sm font-bold">California State University East Bay</p>
                            <p>2009 – 2014 | Bachelor of Arts</p>
                            <p><span class="font-bold">Major:</span> Political Science</p>
                            <p>GPA: 3.9</p>
                        </div>
                        <div class="border-2 border-gray-400"></div>
                        <div>
                            <p class="text-sm font-bold">Las Positas Community College</p>
                            <p>1018 – Present | Associate of Science/Continuing Education</p>
                            <p><span class="font-bold">Major:</span> Computer Science</p>
                            <p>GPA: 4.0</p>
                        </div>
                        <div class="border-2 border-gray-400"></div>
                        <div>
                            <p class="text-sm font-bold">Las Positas Community College</p>
                            <p>2018 – Present | Associate of Science/Continuing Education</p>
                            <p><span class="font-bold">Major:</span> Computer Science</p>
                            <p>GPA: 4.0</p>
                        </div>
                    </div>

                    <div class="border-4 border-gray-400"></div>

                    <!-- Skills -->
                    <div>
                        <h1 class="font-bold uppercase">Skills</h1>
                        <div class="flex flex-wrap gap-2 font-bold">             
                            <div v-for="(language,index) in data.skills.languages" :key="index" class="bg-gray-900 text-white rounded-sm px-2 py-1 w-fit">{{ language.name }}</div>
                            <div v-for="(framework,index) in data.skills.frameworks" :key="index" class="bg-gray-900 text-white rounded-sm px-2 py-1 w-fit">{{ framework.name }}</div>
                            <div v-for="(technology,index) in data.skills.technologies" :key="index" class="bg-gray-900 text-white rounded-sm px-2 py-1 w-fit">{{ technology.name }}</div>
                            <div v-for="(library,index) in data.skills.libraries" :key="index" class="bg-gray-900 text-white rounded-sm px-2 py-1 w-fit">{{ library.name }}</div>
                            <div v-for="(database,index) in data.skills.databases" :key="index" class="bg-gray-900 text-white rounded-sm px-2 py-1 w-fit">{{ database.name }}</div>
                            <div v-for="(practice,index) in data.skills.practices" :key="index" class="bg-gray-900 text-white rounded-sm px-2 py-1 w-fit">{{ practice.name }}</div>
                            <div v-for="(tool,index) in data.skills.tools" :key="index" class="bg-gray-900 text-white rounded-sm px-2 py-1 w-fit">{{ tool.name }}</div>
                        </div>
                    </div>
                </div>

                <!-- Right -->
                <div class="w-1/2 flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <h1 class="font-bold uppercase">Experience</h1>
                        <div>
                            <h2 class="font-bold">Full Stack Web Developer</h2>
                            <p class="text-sm">Jun 2018 – Present | Freelance</p>
                            <ul class="list-disc ml-10">
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione itaque nemo atque facilis! Necessitatibus placeat assumenda laudantium, 
                                </li>
                                <li>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, blanditiis cumque dignissimos minima similique vel numquam nulla sequi porro ducimus iusto 
                                </li>
                            </ul>
                        </div>
                        <div class="border-2 border-gray-400"></div>
                        
                        <div>
                            <h2 class="font-bold">Full Stack Web Developer</h2>
                            <p class="text-sm">Jun 2018 – Present | Freelance</p>
                            <ul class="list-disc ml-10">
                                <li>
                                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe tenetur aliquam labore cumque, vitae explicabo accusamus quos accusantium? Explicabo 
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae omnis illum, explicabo reprehenderit animi adipisci iste quisquam, ducimus eligendi rem 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-4 border-gray-400"></div>
                    <div>
                        <h1 class="font-bold uppercase">Certificates & Awards</h1>
                        <div>
                            <ul class="list-disc ml-10">
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, laboriosam!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, magni?</li>
                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, hic.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quibusdam?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eius.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iste!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>