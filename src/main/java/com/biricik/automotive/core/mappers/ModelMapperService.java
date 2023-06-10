package com.biricik.automotive.core.mappers;

import org.modelmapper.ModelMapper;

public interface ModelMapperService {

	public ModelMapper forResponse();

	public ModelMapper forRequest();

}
