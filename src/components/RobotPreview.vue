<template>   
        <div class="preview">
      <div class="preview-content">
        <div class="top-row">
          <img :src="imageSrc.head.src"/>
        </div>
        <div class="middle-row">
          <img :src="imageSrc.leftArm.src" class="rotate-left"/>
          <img :src="imageSrc.Torsos.src"/>
          <img :src="imageSrc.RightArm.src" class="rotate-right"/>
        </div>
        <div class="bottom-row">
          <img :src="imageSrc.Bases.src"/>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'RobotPreview',
    props: {
      imageSrc: {type:Object,required:true}
    }

}
</script>

<style scoped>
.preview {
  position: absolute;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5.5px;
  margin-right:1.0rem;
  margin-top: 0.1rem;
}
.preview-content {
  border: 1px solid rgb(235, 203, 21);
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
