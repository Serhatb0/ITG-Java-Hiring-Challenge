package com.biricik.automotive.business.abstracts;

import org.springframework.web.multipart.MultipartFile;

import com.biricik.automotive.model.Image;
import com.biricik.automotive.model.Product;

public interface ImageService {
	
	
	public Image uploadImage(MultipartFile file,Product product);

}
