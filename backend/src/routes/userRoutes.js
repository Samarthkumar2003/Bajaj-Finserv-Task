const express = require('express');

const router = new express.Router();

router.get('/bfhl', (req, res) => {
    try{
        res.status(200).json({ operation_code: 1 });
    }catch(e){
        res.status(500).json({
            message : "Internal Server Error!"
        });
    }
});
  

router.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "Samarth_Kumar_31082003";
    const email = "samarth.kumar2021@vitstudent.vit.ac.in";
    const roll_number = "21BCE2702";
  
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false });
    }
  
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().pop()] : [];

    if (highest_alphabet.length > 0) {
        alphabets.push(highest_alphabet[0]);
      }
    
  
    res.json({
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_alphabet
    });
  });
module.exports = router;