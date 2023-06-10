package com.biricik.automotive.business.concretes;

import java.io.IOException;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.biricik.automotive.business.abstracts.ImageService;
import com.biricik.automotive.model.Image;
import com.biricik.automotive.model.Product;
import com.biricik.automotive.repository.ImageRepository;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import jakarta.transaction.Transactional;

@Service
public class ImageManager implements ImageService {

	private final ImageRepository imageRepository;
	private final Cloudinary cloudinary;

	
	
	public ImageManager(ImageRepository imageRepository, Cloudinary cloudinary) {
		this.imageRepository = imageRepository;
		this.cloudinary = cloudinary;
	}


	@Transactional
	@Override
	public Image uploadImage(MultipartFile file,Product product) {
		Map uploadResult = null; 
		try {
			uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		String url =  uploadResult.get("secure_url").toString();
		String name = file.getOriginalFilename();
		long size = file.getSize();
		
		Image image = new Image();
		image.setProduct(product);
		image.setName(name);
		image.setSize(size);
		image.setUrl(url);
		
		return imageRepository.save(image);
		
		
		
	}
	
	
	
	
	
	
}
