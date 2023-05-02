const { Section } = require("../models");
const { success, error } = require("../helpers");

const getAllSections = async(req, res) => {

    await Section.find().sort({ order: 1 })
    .then( data => {
        success(req, res, data)
    })
    .catch(err => {
        error(req, res, err);
    });

}

const createSection = async(req, res) => {

    const { name, markdown, order, path } = req.body;

    
    const sectionData = {
        name, 
        markdown,
        order,
        path
    }

    const section = new Section(sectionData);

    await section.save()
    .then( data => {
        success(req, res, data)
    })
    .catch(err => {
        error(req, res, err);
    });
}

const updateSection = async(req, res) => {
    
    const { id } = req.params;
    const { status, ...data } = req.body;

    await Section.findByIdAndUpdate(id, data, {new: true})
    .then( data => {
        success(req, res, data)
    })
    .catch(err => {
        error(req, res, err);
    });
}

const deleteSection = async (req, res) => {
    
    const { id } = req.params;
    
    await Section.findByIdAndUpdate(id, {status: false}, { new: true })
    .then( data => {
        success(req, res, data)
    })
    .catch(err => {
        error(req, res, err);
    });
}

module.exports = {
    getAllSections,
    createSection,
    updateSection,
    deleteSection
}