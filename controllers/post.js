const PostModel = require("../models/post");
const CommentModel = require("../models/comment");
const SurveyModel = require("../models/survey");

exports.Comment = async (req, res, next) => {
  try {
    let _id = req.params.id
    let {description} = req.body

    let comment = await CommentModel.create({ description } )

    let post = await PostModel.findById({_id})

    post.comment.push(comment)

    await post.save();
    res.send({
      message: "Success"
    })
  } catch(err) {
    next(err);
  }
};

exports.Survey = async (req, res, next) => {
  try {
    let _id = req.params.id
    let {fullname, work, number, email, reason} = req.body

    let survey = await SurveyModel.create({ fullname,
    work,
    number,
    email,
    reason
    })

    let post = await PostModel.findById({_id})

    post.survey.push(survey)

    await post.save();
    res.send({
      message: "Success"
    })
  } catch(err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
    try {
      let posts = await PostModel.find({});
      res.send({
        count: posts.length,
        posts,
      });
    } catch (err) {
      next(err);
    }
  };

  exports.getWanted = async (req, res, next) => {
    try {
      let title = req.params.title;
      let posts = await PostModel.find({ title });
      res.send({
        count: posts.length,
        posts,
      });
    } catch (err) {
      next(err);
    }
  };

  exports.getOwned = async (req, res, next) => {
    try {
      let {ltitle, lbreed} = req.body
      let posts = await PostModel.find({$or:[{title: ltitle}, {breed: lbreed}] });
      res.send({
        count: posts.length,
        posts,
      });
    } catch (err) {
      next(err);
    }
  };

  exports.createPost = async (req, res, next) => {
    try {
      let {title, description, breed, species, image} = req.body;
      let favorite = false;
      let newPost = await PostModel.create({
        title,
        description,
        breed,
        species,
        image,
        favorite,
      });
      res.send({ newPost });
    } catch (err) {
      next(err);
    }
  };

  exports.deletePost = async (req, res, next) => {
    try {
      let _id = req.params.id;
      let { deletedCount } = await PostModel.findByIdAndRemove({ _id });
      res.send({
        message: deletedCount
      })
      res.send({
        message: "Succesfully deleted",
      });
      res.status(400).send({
        message: "cannot delete the post, maybe has been deleted before",
      });    
    }catch (err) {
      next(err);
    }
  };


  exports.updatePost = async (req, res, next) => {
    try {
      let _id = req.params.id;
      let { Newtitle, Newdescription, Newbreed, Newspecies, Newimage} = req.body
      let post = await PostModel.findById({_id});

      post.title = Newtitle;
      post.description = Newdescription;
      post.breed = Newbreed;
      post.species = Newspecies;
      post.image = Newimage;

      await post.save();

      res.send({
        message: "Succesfully updated",
      });
    } catch (err) {
      next(err);
    }
  };

  exports.Favorite = async (req, res, next) => {
    try {
      let _id = req.params.id;

      let post = await PostModel.findById(_id);

      post.favorite = !post.favorite;

      await post.save();

      res.send({
        message: "Succesfully updated",
      });
    } catch (err) {
      next(err);
    }
  };

  /*
  Si te has tomado el tiempo de leer las funciones, notaras como se 
  extrae del objeto req diferentes elementos como: 
  params variables se encuentra en la ruta del recurso solicitado
  body datos que vienen en el cuerpo de la petición
  query parámetros que se encuentra en la sección de query de la URL
  */


/*
exports.deleteWord = async (req, res, next) => {
  try {
    let term = req.params.term;
    let { deletedCount } = await WordModel.deleteOne({ term });
    if (deletedCount == 1) {
      return res.send({
        message: "successfully deleted",
      });
    }
    return res.status(400).send({
      message: "cannot delete the word, maybe is delete before",
    });
  } catch (err) {
    next(err);
  }
};
*/

/**
 * Get word by
 * TODO: Add pagination feature

exports.getWord = async (req, res, next) => {
  try {
    let term = req.params.term;
    let word = await WordModel.findOne({ term });
    if (!word) {
      return res.status(404).send({
        message: "word not found",
      });
    }
    res.send({ word });
  } catch (err) {
    next(err);
  }
};

exports.createWord = async (req, res, next) => {
  try {
    //TODO: Requiere validation
    let { term, description } = req.body;
    let newWord = await WordModel.create({ term, description });
    res.send({ newWord });
  } catch (err) {
    next(err);
  }
};

exports.updateWord = async (req, res, next) => {
  try {
    // TODO: Requiere validation
    // What word update?
    let termToUpdate = req.params.term;
    // New data
    let { term, description } = req.body;
    let word = await WordModel.findOne({ term: termToUpdate });
    if(!word) return res.status(400).send({
      message: "Word to update not found"
    })

    word.term = term;
    word.description = description;
    let updatedWord = await word.save();
    
    if (word == updatedWord) {ø
      return res.send({
        message: "word is updated",
        word: updatedWord,
      });
    }
    res.send({
      message: "cannot update de word",
    });
  } catch (err) {
    next(err);
  }
};



 */