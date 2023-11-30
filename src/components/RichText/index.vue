<template>
  <main class="flex flex-col" id="sample">
    <Editor
      ref="editor"
      id="editor"
      api-key="zgq0y8u719outu5jiz1hd7jfns94g34jqt6bdb9jbsrkm1jo"
      :init="{
        height: 500,
        menubar: false,
        plugins: [
          'a11ychecker',
          'advlist',
          'advcode',
          'advtable',
          'autolink',
          'checklist',
          'export',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'powerpaste',
          'fullscreen',
          'formatpainter',
          'insertdatetime',
          'media',
          'table',
          'help',
          'wordcount'
        ],
        toolbar:
          'undo redo | casechange blocks | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlst checklist outdent indent | removeformat | a11ycheck code table help'
      }"
    />
    <!-- <button @click="onClick">Test</button> -->
  </main>
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'
import { ref } from 'vue'

const onClick = () => {
  tinymce
    .get('editor')
    .setContent(
      `<ul><li>Rest ID<ul><li>With Logo<ul><li>Rest ID: w/LogoRID</li><li>Direct Link: w/LogoDL<ul><li>$10<ul><li>Rest ID: $10RID</li><li>Direct Link: $10DL</li></ul></li></ul></li></ul></li><li>Without Logo<ul><li>Rest ID: w/oLogoRID</li><li>Direct Link: w/oLogoDL</li></ul></li></ul></li></ul>`
    )
}
</script>
